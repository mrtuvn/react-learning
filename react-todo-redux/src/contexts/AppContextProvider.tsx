//React-redux
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { DrawerProvider } from "./drawer/drawerProvider";
import { ModalProvider } from "./modal/modalProvider";

export default function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <Provider store={store}>
      <DrawerProvider>
        <ModalProvider>{children}</ModalProvider>
      </DrawerProvider>
    </Provider>
  );
}
