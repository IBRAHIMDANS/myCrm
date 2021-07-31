import { history } from "../utils/history";

const withAuth = (WrappedComponent: any) => {
  return (props: JSX.IntrinsicAttributes) => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("users");

      if (!accessToken) {
        history.replace("/login");
        return null;
      }

      return <WrappedComponent {...props} />;
    }
    return null;
  };
};

export default withAuth;
