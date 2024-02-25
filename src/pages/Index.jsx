import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Button, Text, FormControl, FormLabel, Input, Textarea, useToast, List, ListItem, ListIcon, CalendarIcon } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  const toast = useToast();

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date) {
      toast({
        title: "Error",
        description: "Title and date are required to add an event.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", description: "" });
    toast({
      title: "Event added",
      description: "Your event has been added to the calendar.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl" textAlign="center">
        Schedule Calendar Collaboration App
      </Heading>
      <Box w="100%" p={5} borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="md" mb={4}>
          Add New Event
        </Heading>
        <HStack spacing={4}>
          <FormControl id="event-title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input placeholder="Event Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
          </FormControl>
          <FormControl id="event-date" isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
          </FormControl>
        </HStack>
        <FormControl id="event-description" mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Event Description" value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} />
        </FormControl>
        <Button leftIcon={<FaPlus />} mt={4} colorScheme="blue" onClick={addEvent}>
          Add Event
        </Button>
      </Box>
      <Box w="100%" p={5} borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="md" mb={4}>
          Upcoming Events
        </Heading>
        <List spacing={3}>
          {events.map((event, index) => (
            <ListItem key={index}>
              <HStack>
                <ListIcon as={FaCalendarAlt} color="green.500" />
                <Text fontWeight="bold">{event.title}</Text>
                <Text>-</Text>
                <Text>{event.date}</Text>
              </HStack>
              <Text pl={10}>{event.description}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
