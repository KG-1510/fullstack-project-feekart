import Loader from "../../components/loader/animation";

export default function LoadingAnimation(props) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader className={props.className} color={props.color} />
    </div>
  );
}
