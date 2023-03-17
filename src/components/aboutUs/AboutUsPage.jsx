import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function AboutUsPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://www.kovka-stroy.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-us-background.dd74561a.png&w=1920&q=75"})`,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.7)",
          width: { xs: "70%" },
          height: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          padding: "4%",
        }}
      >
        <Typography sx={{ color: "#FFDB7F" }} variant="h3">
          О НАС
        </Typography>
        <Typography sx={{ fontSize: "20px", color: "white" }} variant="p">
          У нас Вы можете Заказать оригинальные кованые изделия, которые помогут
          создать красиво неповторимые интерьеры и экстерьеры. Наличие
          собственной производственного цеха позволяет принимать заказы на
          изготовление изделий. В число изготовляемых изделий входят: Лестницы,
          перила, калитки, ворота, заборы, ограждения. Решения для ландшафтных
          проектов − цветники, беседки, лавки, всё для мангальных зон. Изделия
          для дома: скамейки, стулья и столы, кресла, кровати, принадлежности
          для камина.Весь товар изготавливается мастерами своего дела,
          работающими в данной сфере уже более 10 года. Это гарантирует
          выполнение заказов в срок и высокое качество изделий художественной
          ковки для вас!
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUsPage;
