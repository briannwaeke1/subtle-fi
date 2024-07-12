import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldValues } from "react-hook-form";

interface CustomInputProps {
  label: string;
  placeholder: string;
  inputWrapperClassName?: string;
  formItemClassName?: string;
  formLabelClassName?: string;
  field: FieldValues;
}

const CustomInput = ({
  label,
  placeholder,
  formItemClassName,
  formLabelClassName,
  inputWrapperClassName,
  field,
}: CustomInputProps) => {
  return (
    <FormItem className={formItemClassName}>
      <div className={cn("form-item", inputWrapperClassName)}>
        <FormLabel className={cn("form-label", formLabelClassName)}>
          {label}
        </FormLabel>
        <div className="flex w-full flex-col">
          <FormControl>
            <Input
              placeholder={placeholder}
              className="input-class"
              type={label === "Password" ? "password" : "text"}
              {...field}
            />
          </FormControl>
          <FormMessage className="form-message" />
        </div>
      </div>
    </FormItem>
  );
};
export default CustomInput;
