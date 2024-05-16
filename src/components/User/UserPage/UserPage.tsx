import { useFetchUser } from "@/hooks/user/useFetchUser";
import MyPostList from "../MyPostList/MyPostList";
import { Box } from "@mantine/core";
import CircularProgress from "@mui/material/CircularProgress";
import { Icon } from "@iconify/react/dist/iconify.js";

const UserPage: React.FC = () => {
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
    <>
      <div className="sm:ml-20 mt-16 border-b bg-white">
        <div className="flex">
          <div className="ml-4">
            <Icon
              icon="mingcute:user-4-line"
              className="text-6xl items-center"
            />
          </div>
          <div className="ml-4 mt-4 text-indigo-500">{data.name}</div>
        </div>
      </div>

      <div className="ml-36 sm:ml-[390px] mt-4 text-gray-500">Your Posts</div>

      <MyPostList userName={data.name} />
    </>
  );
};

export default UserPage;
