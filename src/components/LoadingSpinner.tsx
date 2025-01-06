import PublicIcon from "@mui/icons-material/Public";

function LoadingSpinner() {
  return (
    <div className="fixed h-screen top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
      <div className="w-16 h-16 flex animate-spin-slow flex-wrap ">
        <PublicIcon className="w-8 h-8 animate-[scaleDownUp_2s_linear_1s_infinite]" />
        <PublicIcon className="w-8 h-8  animate-[scaleDownUp_2s_linear_0s_infinite]" />
      </div>
      <p>Загрузка данных...</p>
    </div>
  );
}

export default LoadingSpinner;
