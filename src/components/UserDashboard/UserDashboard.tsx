interface Props {
  slug: string;
}

const UserDashboard: React.FC<Props> = ({ slug }) => {
  return <>{JSON.stringify(slug)}</>;
};

export default UserDashboard;
