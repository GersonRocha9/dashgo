import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: ["01/01/2019", "01/02/2019", "01/03/2019", "01/04/2019", "01/05/2019", "01/06/2019", "01/07/2019"],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series1 = [
  {
    name: "series-2",
    data: [89, 43, 35, 54, 41, 59, 80],
  },
];

const series2 = [
  {
    name: "series-1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />

        <SimpleGrid flex={1} gap={4} minChildWidth="320px" alignItems="flex-start">
          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}>
              Inscritos da Semana
            </Text>
            <Chart type="area" height={160} options={options} series={series1} />
          </Box>

          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}>
              Taxa de Abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series2} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
