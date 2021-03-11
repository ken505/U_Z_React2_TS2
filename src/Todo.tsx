export const Todo = (props) => {
  const { title, userid } = props;
  return <P>{`${title}(user:${userid})`}</P>;
};
