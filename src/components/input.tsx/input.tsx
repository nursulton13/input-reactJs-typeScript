interface PropsInput {
  id: string;
  type?: string;
  label: string;
  value: string;
  onchange: any;
}

const Input = ({
  id,
  type,
  label,
  value,
  onchange,
}: PropsInput): JSX.Element => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onchange}
        placeholder=""
        className="
        input_component
        block
        rounded-md 
        px-6 
        py-3
        w-full 
        text-lg 
        text-white 
        bg-white
        -webkit-appearance-none
        focus:outline-none 
        invalid:text-red-500
        peer
        "
      />
      <label
        htmlFor={id}
        className={`
        absolute 
        text-[24px]
        duration-150
        transform-translate-y-10
        scale-75
        -top-8
        z-10
        origin-[0]
        left-1
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
