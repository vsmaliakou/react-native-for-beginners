import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import styled from "styled-components/native";
import { Loader } from "../components/Loader";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const PostScreen = ({ route, navigation }) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id, title } = route.params;

  const fetchPost = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`https://cb5527fb127fad91.mokky.dev/posts/${id}`);

      setPost(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ошибка", "Не удалось получить статью");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({ title });

    fetchPost();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: post.imageUrl }} />

      <PostText>{post.text}</PostText>
    </View>
  );
};
