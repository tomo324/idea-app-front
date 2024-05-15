import { useFetchUser } from "@/hooks/user/useFetchUser";
import MyPostList from "../MyPostList/MyPostList";
import { Box } from "@mantine/core";
import CircularProgress from "@mui/material/CircularProgress";

const UserInfo: React.FC = () => {

  // ユーザー情報を取得する
  const { data, error, isLoading } = useFetchUser();

  if (error)
    return <div className="sm:ml-24 mt-20">Error: {error.message}</div>;
  if (isLoading)
    return (
      <Box className="flex justify-center items-start mt-20">
        <CircularProgress color="inherit" />
      </Box>
    );

  return (
    <MyPostList userName={data.name} />
  )
}

export default UserInfo;
