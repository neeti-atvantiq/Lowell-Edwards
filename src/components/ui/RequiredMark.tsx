export default function RequiredMark() {
  return (
    <span
      aria-label="required"
      title="This field is required"
      style={{ color: '#b3261e', marginLeft: 4 }}
    >
      *
    </span>
  );
}