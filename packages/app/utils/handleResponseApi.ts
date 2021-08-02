import { history } from "./history";

export default function handleResponseAPi(response: {
  text: () => Promise<any>;
  ok: any;
  status: number;
  statusText: any;
}) {
  return response.text().then(async text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("users");
          history.push("/login");
          // window.location.reload();
        }
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
