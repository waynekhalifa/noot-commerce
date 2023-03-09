import { Editor } from "@tinymce/tinymce-react";
import { useController } from "react-hook-form";

interface Props {
  initialValue: string;
  name: any;
  control: any;
}

const TextEditor: React.FC<Props> = ({ initialValue, name, control }) => {
  const {
    field: { onChange, ...field },
  } = useController({ control, name });

  return (
    <Editor
      apiKey="at7tdyibtjhvlrhivcn3jb1pvaecsstr5izkxs40hbb40hb5"
      {...field}
      onEditorChange={onChange}
      initialValue={initialValue}
      init={{
        height: 472,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount directionality",
        ],
        toolbar:
          "undo redo | ltr rtl | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | image media lists link | table code paste wordcount | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};

export default TextEditor;
