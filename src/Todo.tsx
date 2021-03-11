export const Todo = (props) => {
  const { title, userid, completed } = props;
  const completeMark = completed ? "[Done]" : "[Un]";
  return <p>{`${completeMark}${title}(user:${userid})`}</p>;
};
