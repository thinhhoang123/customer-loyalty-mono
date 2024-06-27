'use client';
import { Button, Checkbox, Group, Radio, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function CustomerForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
      gender: '0',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => console.log(values))}
      className="w-full flex flex-col gap-4"
    >
      <TextInput
        withAsterisk
        label="Customer name"
        key={form.key('email')}
        {...form.getInputProps('name')}
      />

      <Radio.Group
        name="gender"
        label="Gender"
        withAsterisk
        {...form.getInputProps('gender')}
      >
        <Group mt="xs">
          <Radio label="Female" value="0" />
          <Radio label="Male" value="1" />
          <Radio label="Other" value="2" />
        </Group>
      </Radio.Group>

      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
