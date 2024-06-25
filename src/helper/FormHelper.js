import cogoToast from "cogo-toast";

const EmailRegex = /\S+@\S+\.\S+/;
const MobileRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
  IsEmpty = (value) => {
    return value.length === 0;
  };
  IsMobile = (value) => {
    return MobileRegex.test(value);
  };
  IsEmail = (value) => {
    return !EmailRegex.test(value);
  };
  ErrorToast = (message) => {
    cogoToast.error(message, { position: "top-center" });
  };
  SuccessToast = (message) => {
    cogoToast.success(message, { position: "top-center" });
  };
}

export const { IsEmpty, IsMobile, IsEmail, ErrorToast, SuccessToast } =
  new FormHelper();
