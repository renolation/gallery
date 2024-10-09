import {Text, Flex, Button} from "@mantine/core";
import FeaturedMasonry from "@/components/home/featured-masonry";
import {IconDownload, IconChevronRight} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Flex
                w="100%"
                justify="space-between"
                align="center"
                direction="row"
                wrap="nowrap"
                className="p-3"
            >
                <Text size="xl" fw={700}>Featured Images</Text>
                <Button rightSection={<IconChevronRight size={14}/>} variant="outline" size="xs"
                        radius="sm"
                className="hover:bg-blue-900"
                >
                    <Link href="/images" style={{ textDecoration: 'none' }}>Explore all images</Link>
                </Button>
            </Flex>
            <FeaturedMasonry/>
        </>
    );
}
