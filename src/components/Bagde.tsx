import '@/styles/Badge.scss';

type BadgeProps = {
 label: string,
};

export default function Badge ({label}: BadgeProps) {
 return <span className="badge" role="status">
  {label}
 </span>
}