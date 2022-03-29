type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

type Props = Pick<
  ImageProps,
  "src" | "style" | "className" | "height" | "width"
>;

export default function LoadeableImage(props: Props) {
  return <img {...props} />;
}
