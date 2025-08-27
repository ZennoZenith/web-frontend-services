import { exhaustiveMatchingGuard, TOAST_TYPES, Toaster, type ToastType } from "./toaster.js";

const maybeToastTestElement = document.getElementById("test-toast") as
  | HTMLDivElement
  | null;

if (!maybeToastTestElement) {
  throw new Error("toast-test not found");
}

console.log(maybeToastTestElement);
const elements = maybeToastTestElement.querySelectorAll("[data-emmit-toast-type]");
for (const element of elements) {
  const toastType = element.getAttribute("data-emmit-toast-type");
  if (toastType === null) continue;
  if (!TOAST_TYPES.includes(toastType as ToastType)) continue;

  element.addEventListener("click", () => showToast(toastType as ToastType));
}

function showToast(toastType: ToastType) {
  const toaster = Toaster.getInstance();
  switch (toastType) {
    case "INFO":
      toaster.info("Info Message", "Info title", 0);
      break;
    case "SUCCESS":
      toaster.success("Success Message", "Success title");
      break;
    case "WARNING":
      toaster.warning("Warning Message", "Warning title");
      break;
    case "ERROR":
      toaster.error("Error Message", "Error title");
      break;
    default:
      exhaustiveMatchingGuard(toastType);
  }
}
