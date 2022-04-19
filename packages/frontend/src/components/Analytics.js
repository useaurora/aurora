import { Flex } from "@chakra-ui/react";
import * as React from "react";
import { Datatable } from "./Datatable";
import { TimeseriesChart } from "./TimeseriesChart";

export function usePages(wid) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve, reject) => setTimeout(() => resolve(), 5000));
      setData([]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { data, isLoading };
}

export function Analytics({ wid }) {
  const {
    data: pages,
    isLoading: isPagesLoading,
    isError: isPagesError,
  } = usePages(wid);

  return (
    <div>
      <Flex direction="column" gap={5}>
        <Flex gap={5}>
          <Flex flex={1} boxShadow="xs" p="6" rounded="md" bg="white">
            Page Views
          </Flex>
          <Flex flex={1} boxShadow="xs" p="6" rounded="md" bg="white">
            Unique Visitors
          </Flex>
          <Flex flex={1} boxShadow="xs" p="6" rounded="md" bg="white">
            Bounce Rate
          </Flex>
          <Flex flex={1} boxShadow="xs" p="6" rounded="md" bg="white">
            Average Visit Time
          </Flex>
        </Flex>

        <Flex boxShadow="xs" p="6" rounded="md" bg="white">
          <TimeseriesChart data={[]} />
        </Flex>

        <Flex gap={5}>
          <Datatable title="Page" isLoading={isPagesLoading} data={pages} />
          <Datatable title="Referrer" isLoading={false} data={[]} />
        </Flex>

        <Flex gap={5}>
          <Datatable title="Operating System" data={[]} />
          <Datatable title="Browser" data={[]} />
          <Datatable title="Country" data={[]} />
        </Flex>
      </Flex>
    </div>
  );
}
