import Image from "next/image";

export type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: any;
};

function OptimizedImg(props: Props) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      style={props.style}
    />
  );
}

export default OptimizedImg;
