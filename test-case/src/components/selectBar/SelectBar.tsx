import { Select } from "antd";

type options = {
  value: string;
  label: string;
};

export default function SelectBox({
  handleChange,
  options,
  defaultValue,
}: {
  handleChange: (value: string) => void;
  options: options[];
  defaultValue: string;
}) {
  return (
    <>
      <Select
        style={{ width: 250 }}
        onChange={handleChange}
        defaultValue={defaultValue}
        options={options}
      />
    </>
  );
}
