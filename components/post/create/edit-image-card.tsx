"use client";
import {
    Button,
    Flex,
    Modal,
    TextInput,
    NumberInput,
    Select,
    Popover,
    Text,
    MultiSelect,
    Alert,
    Divider
} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import {useDisclosure} from '@mantine/hooks';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateImage, updateTechnique, updateTool} from "@/lib/features/post/edit/edit-post-image-slice";
import {index} from "d3-array";
import {RootState} from "@/lib/store";
import ImageTags from "@/components/post/create/image-tags";
import {updateImageAction} from "@/action/image-action";
import {Image as ImageDB} from "@prisma/client";


export default function EditImageCard({imageString, imageIndex, image, saveChanges}: {
    imageString: string,
    imageIndex: number,
    image: ImageDB
    saveChanges: () => void
}) {
    const dispatch = useDispatch();

    const [opened, {open, close}] = useDisclosure(false);
    const [formData, setFormData] = useState({
        prompt: image.prompt,
        negativePrompt: image.nevPrompt,
        guidanceScale: image.guidanceScale,
        steps: image.steps,
        sampler: image.sampler,
        seed: image.seed,
    });

    const [tempFormData, setTempFormData] = useState({
        prompt: image.prompt,
        negativePrompt: image.nevPrompt,
        guidanceScale: image.guidanceScale,
        steps: image.steps,
        sampler: image.sampler,
        seed: image.seed,
    });
    const editPostImageState = useSelector((state: RootState) => state.editPostImage.images);

    const [popoverOpened, setPopoverOpened] = useState(false);
    const [popoverTechniquesOpened, setPopoverTechniquesOpened] = useState(false);

    const [selectedTools, setSelectedTools] = useState<string[]>([]);
    const [tempSelectedTools, setTempSelectedTools] = useState<string[]>([]);

    const [selectedTechniques, setSelectedTechniques] = useState<string[]>([]);
    const [tempSelectedTechniques, setTempSelectedTechniques] = useState<string[]>([]);

    //region Tools, Techniques
    const openPopover = () => {
        setPopoverOpened((o) => !o);
        setTempSelectedTools(selectedTools);
    }
    const openTechniquesPopover = () => {
        setPopoverTechniquesOpened((o) => !o);
        setTempSelectedTechniques(selectedTechniques);
    }
    const handleToolsChange = (value: string[]) => {
        setTempSelectedTools(value);
    };
    const handleTechniquesChange = (value: string[]) => {
        setTempSelectedTechniques(value);
    };
    const handleSave = () => {
        setSelectedTools(tempSelectedTools);
        console.log(imageIndex, tempSelectedTools);
        dispatch(updateTool({index: imageIndex, tools: tempSelectedTools}));
        saveChanges();
        setPopoverOpened(false);
    }
    const handleTechniquesSave = () => {
        setSelectedTechniques(tempSelectedTechniques);
        dispatch(updateTechnique({index: imageIndex, techniques: tempSelectedTechniques}));

        setPopoverTechniquesOpened(false);
    }
    const handleRemoveTool = (tool: string) => {
        setSelectedTools((prev) => prev.filter((t) => t !== tool));
        dispatch(updateTool({index: imageIndex, tools: tempSelectedTools}));
        saveChanges();
    }
    const handleRemoveTechniques = (technique: string) => {
        setSelectedTechniques((prev) => prev.filter((t) => t !== technique));
        dispatch(updateTechnique({index: imageIndex, techniques: tempSelectedTechniques}));

    }
    //endregion

    const handleChange = (field: string, value: any) => {
        setTempFormData((prev) => ({...prev, [field]: value}));
    };

    const handleSubmit = async () => {
        setFormData(tempFormData);
        console.log('Form Data:', tempFormData);
        dispatch(updateImage({index: imageIndex, formData: tempFormData}));
        await updateImageAction(editPostImageState[imageIndex].id, tempFormData.prompt, tempFormData.negativePrompt, tempFormData.guidanceScale, tempFormData.steps, tempFormData.sampler, tempFormData.seed);
        close();
    };

    const openModal = () => {
        setTempFormData(formData);
        open();
    };


    const handleSaveChanges = () => {
        saveChanges()
    }


    return (
        <>

            <Modal opened={opened} onClose={close} title="Image details">
                <TextInput
                    label="Prompt"
                    placeholder="Enter prompt"
                    value={tempFormData.prompt}
                    onChange={(event) => handleChange('prompt', event.currentTarget.value)}
                />
                <TextInput
                    label="Negative Prompt"
                    placeholder="Enter negative prompt"
                    value={tempFormData.negativePrompt}
                    onChange={(event) => handleChange('negativePrompt', event.currentTarget.value)}
                />
                <Flex gap={3}>
                    <NumberInput
                        label="Guidance Scale"
                        placeholder="Enter guidance scale"
                        min={0}
                        value={tempFormData.guidanceScale}
                        onChange={(value) => handleChange('guidanceScale', value)}
                    />
                    <NumberInput
                        label="Steps"
                        placeholder="Enter steps"
                        value={tempFormData.steps}
                        onChange={(value) => handleChange('steps', value)}
                    />
                </Flex>
                <Select
                    label="Sampler"
                    placeholder="Select sampler"
                    data={[
                        {value: 'sampler1', label: 'Sampler 1'},
                        {value: 'sampler2', label: 'Sampler 2'},
                        {value: 'sampler3', label: 'Sampler 3'},
                    ]}
                    value={tempFormData.sampler}
                    onChange={(value) => handleChange('sampler', value)}
                />
                <NumberInput
                    label="Seed"
                    placeholder="Enter seed"
                    value={tempFormData.seed}
                    onChange={(value) => handleChange('seed', value)}
                />
                <Button onClick={handleSubmit} variant="filled" fullWidth mt="md">Save</Button>
            </Modal>


            <div
                className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3 p-3  sm:gap-4 sm:p-6">
                <div className="flex flex-row flex-wrap gap-3 sm:flex-nowrap sm:gap-6">

                    <div className=" flex w-full flex-1 flex-col gap-3 sm:gap-4">
                        {/*list item*/}
                        <div
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3">
                            <Flex gap={3} justify="space-between" align="center">
                                <p>Prompt</p>
                                <Button variant="filled" onClick={open}>Edit</Button>
                            </Flex>
                            <Divider />
                            {formData.prompt && <Text>Prompt: {formData.prompt}</Text>}
                            {formData.negativePrompt && <Text>Negative Prompt: {formData.negativePrompt}</Text>}
                            {formData.guidanceScale !== undefined && formData.guidanceScale !== 0 &&
                                <Text>Guidance Scale: {formData.guidanceScale}</Text>}
                            {formData.steps !== undefined && formData.steps !== 0 &&
                                <Text>Steps: {formData.steps}</Text>}
                            {formData.seed !== undefined && formData.seed !== 0 && <Text>Seed: {formData.seed}</Text>}
                            {formData.sampler && <Text>Sampler: {formData.sampler}</Text>}
                        </div>


                        {/*tools*/}
                        {/*<div*/}
                        {/*    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3">*/}

                        {/*    <Flex gap={3} justify="space-between" align="center">*/}
                        {/*        <p>Tools</p>*/}

                        {/*        <Popover*/}
                        {/*            opened={popoverOpened}*/}
                        {/*            onClose={() => setPopoverOpened(false)}*/}
                        {/*            width={260}*/}
                        {/*            position="right"*/}
                        {/*            closeOnClickOutside={false}*/}
                        {/*            withArrow*/}
                        {/*        >*/}
                        {/*            <Popover.Target>*/}
                        {/*                <Button onClick={openPopover}>*/}
                        {/*                    Toggle popover*/}
                        {/*                </Button>*/}
                        {/*            </Popover.Target>*/}
                        {/*            <Popover.Dropdown>*/}
                        {/*                <MultiSelect*/}
                        {/*                    checkIconPosition="right"*/}
                        {/*                    data={[*/}
                        {/*                        {*/}
                        {/*                            group: 'Frontend',*/}
                        {/*                            items: ['React', 'Angular', 'Vue', 'Svelte', 'Ember', 'Backbone', 'Preact', 'Alpine.js']*/}
                        {/*                        },*/}
                        {/*                        {*/}
                        {/*                            group: 'Backend',*/}
                        {/*                            items: ['Express', 'Django', 'Flask', 'Spring', 'Rails', 'Laravel', 'Koa', 'NestJS']*/}
                        {/*                        },*/}
                        {/*                        {*/}
                        {/*                            group: 'Database',*/}
                        {/*                            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Cassandra', 'MariaDB', 'Oracle']*/}
                        {/*                        },*/}
                        {/*                        {*/}
                        {/*                            group: 'DevOps',*/}
                        {/*                            items: ['Docker', 'Kubernetes', 'Jenkins', 'Travis CI', 'CircleCI', 'GitLab CI', 'Ansible', 'Terraform']*/}
                        {/*                        },*/}
                        {/*                    ]}*/}
                        {/*                    dropdownOpened*/}
                        {/*                    pb={240}*/}
                        {/*                    hidePickedOptions*/}
                        {/*                    searchable*/}
                        {/*                    label="Control check icon"*/}
                        {/*                    placeholder="Pick value"*/}
                        {/*                    value={tempSelectedTools}*/}
                        {/*                    defaultValue={[]}*/}
                        {/*                    onChange={handleToolsChange}*/}
                        {/*                />*/}
                        {/*                <Button variant="filled" onClick={handleSave} fullWidth mt="md">Save</Button>*/}

                        {/*            </Popover.Dropdown>*/}

                        {/*        </Popover>*/}
                        {/*    </Flex>*/}
                        {/*    <p>List of tools</p>*/}
                        {/*    {selectedTools.map((tool) => (*/}
                        {/*        <Flex justify={"space-between"} align={"center"} key={tool}>*/}
                        {/*            <Text>{tool}</Text>*/}
                        {/*            <Button variant="light" size="xs"*/}
                        {/*                    onClick={() => handleRemoveTool(tool)}>Remove</Button>*/}
                        {/*        </Flex>*/}
                        {/*    ))}*/}

                        {/*</div>*/}

                        {/*<div*/}
                        {/*    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3">*/}

                        {/*    <Flex gap={3} justify="space-between" align="center">*/}
                        {/*        <p>Techniques</p>*/}
                        {/*        <Popover*/}
                        {/*            opened={popoverTechniquesOpened}*/}
                        {/*            onClose={() => setPopoverTechniquesOpened(false)}*/}
                        {/*            width={260}*/}
                        {/*            position="right"*/}
                        {/*            closeOnClickOutside={false}*/}
                        {/*            withArrow*/}
                        {/*        >*/}
                        {/*            <Popover.Target>*/}
                        {/*                <Button onClick={openTechniquesPopover}>*/}
                        {/*                    Toggle popover*/}
                        {/*                </Button>*/}
                        {/*            </Popover.Target>*/}
                        {/*            <Popover.Dropdown>*/}
                        {/*                <MultiSelect*/}
                        {/*                    checkIconPosition="right"*/}
                        {/*                    data={[*/}
                        {/*                        {*/}
                        {/*                            group: 'Frontend',*/}
                        {/*                            items: ['React', 'Angular', 'Vue', 'Svelte', 'Ember', 'Backbone', 'Preact', 'Alpine.js']*/}
                        {/*                        },*/}
                        {/*                        {*/}
                        {/*                            group: 'Backend',*/}
                        {/*                            items: ['Express', 'Django', 'Flask', 'Spring', 'Rails', 'Laravel', 'Koa', 'NestJS']*/}
                        {/*                        },*/}
                        {/*                        {*/}
                        {/*                            group: 'Database',*/}
                        {/*                            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Cassandra', 'MariaDB', 'Oracle']*/}
                        {/*                        },*/}
                        {/*                        {*/}
                        {/*                            group: 'DevOps',*/}
                        {/*                            items: ['Docker', 'Kubernetes', 'Jenkins', 'Travis CI', 'CircleCI', 'GitLab CI', 'Ansible', 'Terraform']*/}
                        {/*                        },*/}
                        {/*                    ]}*/}
                        {/*                    dropdownOpened*/}
                        {/*                    pb={240}*/}
                        {/*                    hidePickedOptions*/}
                        {/*                    searchable*/}
                        {/*                    label="Control check icon"*/}
                        {/*                    placeholder="Pick value"*/}
                        {/*                    value={tempSelectedTechniques}*/}
                        {/*                    defaultValue={[]}*/}
                        {/*                    onChange={handleTechniquesChange}*/}
                        {/*                />*/}
                        {/*                <Button variant="filled" onClick={handleTechniquesSave} fullWidth*/}
                        {/*                        mt="md">Save</Button>*/}

                        {/*            </Popover.Dropdown>*/}

                        {/*        </Popover>*/}
                        {/*    </Flex>*/}
                        {/*    <p>List of Techniques</p>*/}
                        {/*    {selectedTechniques.map((technique) => (*/}
                        {/*        <Flex justify={"space-between"} align={"center"} key={technique}>*/}
                        {/*            <Text>{technique}</Text>*/}
                        {/*            <Button variant="light" size="xs"*/}
                        {/*                    onClick={() => handleRemoveTechniques(technique)}>Remove</Button>*/}
                        {/*        </Flex>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                        <div
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3">

                            {/*{*/}
                            {/*    editPostImageState[imageIndex].tags.map((tag, index) => (*/}
                            {/*        <div key={index}>*/}
                            {/*            <ImageTags index={index} tagName={tag.name} id={editPostImageState[imageIndex].id}/>*/}
                            {/*        </div>*/}
                            {/*    ))*/}
                            {/*}*/}
                            <ImageTags imageIndex={imageIndex}/>
                        </div>
                    </div>


                    <div className="flex w-full flex-col sm:w-4/12">
                        <img src={imageString} alt={`Dropped file ${imageIndex + 1}`}/>

                    </div>
                </div>

            </div>

        </>
    );
}