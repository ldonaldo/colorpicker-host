declare module "colorList/ColorList" {
  interface ColorListProps {
    colorsList: string[];
    handleClickClearColors: () => void;
  }
  const ColorList: React.ComponentType<ColorListProps>;
  export default ColorList;
}

declare module "colorPicker/ColorPicker" {
  interface ColorPickerProps {
    color: string;
    handleChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitSaveColor: (e: React.FormEvent<HTMLFormElement>) => void;
  }
  const ColorPicker: React.ComponentType<ColorPickerProps>;
  export default ColorPicker;
}

declare module "colorPicker/useColors" {
  interface UseColorProps {
    color: string;
    colorsList: string[];
    handleChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitSaveColor: (e: React.FormEvent<HTMLFormElement>) => void;
    handleClickClearColors: () => void;
  }
  export const useColors: () => UseColorProps;
}
