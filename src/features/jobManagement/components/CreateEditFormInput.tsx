type Props = {
  id: string;
  labelText: string;
  inputType: 'text' | 'number';
  placeHolder: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  divClassName?: string;
  inputClassName?: string;
};

export default function CreateEditFormInput({
  id,
  labelText,
  inputType,
  placeHolder,
  value,
  onChange,
  required,
  divClassName,
  inputClassName,
}: Props) {
  return (
    <div className={`flex flex-col gap-5 ${divClassName ?? ''}`}>
      <label className="cursor-pointer capitalize" htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        type={inputType}
        placeholder={placeHolder}
        value={value}
        className={`p-8 border border-gray-200 rounded-lg placeholder:text-gray-400 placeholder:text-sm placeholder:capitalize ${inputClassName ?? ''}`}
        onChange={onChange}
        required={required}
        name={id}
      />
    </div>
  );
}
