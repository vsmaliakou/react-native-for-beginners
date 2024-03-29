import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../components/Loader";

export const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://cb5527fb127fad91.mokky.dev/posts");

      setPosts(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ошибка", "Не удалось получить статьи");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
      }
      data={posts}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Post", { id: item.id, title: item.title })}
          >
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};
