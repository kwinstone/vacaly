import { useDocTitle } from "@/shared/utils/useDocTitle.ts";
import bgImg from "@/resources/images/background.png";
import {
  BackgroundImage,
  Button,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import TitleIcon from "@/resources/icons/title.svg?react";
import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  useDocTitle("Авторизация");

  return (
    <BackgroundImage src={bgImg} h={"100vh"} mih={"900px"} pt={50}>
      <Paper w={540} mx={"auto"} p={24} radius={"md"} shadow={"xs"}>
        <TitleIcon width={"150px"} height={"50px"} />
        <Text fw={500} size={"17px"} mt={6}>
          Добро пожаловать в Vacaly!
        </Text>
        <Text size={"14px"} fw={500} color={"gray.8"} mt={22} mb={8}>
          Заполните данные
        </Text>
        <Stack gap={18}>
          <TextInput placeholder={"Эл. почта"} name={"email"} />
          <PasswordInput placeholder={"Пароль"} name={"password"} />
          <Text fw={500} size={"14px"} ta={"right"}>
            <NavLink to={"/"}>Забыли пароль?</NavLink>
          </Text>
          <Button display={"block"} fullWidth>
            Войти в систему
          </Button>
        </Stack>
      </Paper>
    </BackgroundImage>
  );
};
