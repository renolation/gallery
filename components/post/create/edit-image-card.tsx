import {Button, Flex} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";


export default function EditImageCard({imageString, imageIndex}: { imageString: string, imageIndex: number }) {
    return (
        <>
            <div
                className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3 p-3  sm:gap-4 sm:p-6">
                <div className="flex flex-row flex-wrap gap-3 sm:flex-nowrap sm:gap-6">

                    <div className=" flex w-full flex-1 flex-col gap-3 sm:gap-4">
                        {/*list item*/}
                        <div
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3">
                            <Flex gap={3} justify="space-between" align="center">
                                <p>Prompt</p>
                                <Button variant="filled">Edit</Button>
                            </Flex>
                        </div>

                        <div
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3">

                            <Flex gap={3} justify="space-between" align="center">
                                <p>Tools</p>
                                <Button leftSection={<IconPlus size={14}/>} variant="filled">Edit</Button>
                            </Flex>
                            <p>List of tools</p>
                        </div>

                        <div
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3">

                            <Flex gap={3} justify="space-between" align="center">
                                <p>Techniques</p>
                                <Button leftSection={<IconPlus size={14}/>} variant="filled">Edit</Button>
                            </Flex>
                            <p>List of techniques</p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-3 sm:w-4/12">
                        <img src={imageString} alt={`Dropped file ${imageIndex + 1}`}/>
                    </div>
                </div>
            </div>

        </>
    );
}