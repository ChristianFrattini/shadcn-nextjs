interface ContainerProps {
  //type definition
  children: React.ReactNode; //takes a react.node type (such as spans h1..)
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  //reusable container functional component
  return <div className={"mx-auto w-full max-w-5xl"}>{children}</div>; //takes the children component and applies styling
};
export default Container;
