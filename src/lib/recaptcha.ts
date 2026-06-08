type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
};

export type VerifyRecaptchaOptions = {
  token: string;
  expectedAction?: string;
  minScore?: number;
  remoteIp?: string;
};

export async function verifyRecaptcha({
  token,
  expectedAction,
  minScore = 0.5,
  remoteIp,
}: VerifyRecaptchaOptions): Promise<{ ok: true } | { ok: false; reason: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false, reason: 'reCAPTCHA secret not configured' };
  }
  if (!token) {
    return { ok: false, reason: 'Missing reCAPTCHA token' };
  }

  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp) params.set('remoteip', remoteIp);

  let data: RecaptchaVerifyResponse;
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      cache: 'no-store',
    });
    data = (await res.json()) as RecaptchaVerifyResponse;
  } catch {
    return { ok: false, reason: 'Failed to reach reCAPTCHA' };
  }

  if (!data.success) {
    return { ok: false, reason: `reCAPTCHA failed: ${(data['error-codes'] || []).join(', ') || 'unknown'}` };
  }
  if (expectedAction && data.action && data.action !== expectedAction) {
    return { ok: false, reason: `Unexpected reCAPTCHA action: ${data.action}` };
  }
  if (typeof data.score === 'number' && data.score < minScore) {
    return { ok: false, reason: `Low reCAPTCHA score: ${data.score}` };
  }

  return { ok: true };
}
