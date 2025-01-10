import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function Error() {
  return (
    <div className="flex items-center justify-center gap-5 text-xl">
      <ErrorOutlineOutlinedIcon
        sx={{
          width: { xs: "2rem" },
          height: { xs: "2rem" },
        }}
      />
      <p>Ошибка загрузки данных. Пожалуйста, перезагрузите страницу.</p>
    </div>
  );
}

export default Error;
