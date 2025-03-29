import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useRequest } from '@hooks/useRequest';
import { Button } from '@components/Button';

const meta: Meta<typeof useRequest> = {
  title: 'Hooks/useRequest',
  component: null,
  parameters: {
    layout: 'centered',
  },
  render: () => null,
} satisfies Meta<typeof useRequest>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSuccessRequest = () => new Promise((resolve) => setTimeout(() => resolve({ data: 'Successful response!' }), 1000));
const mockErrorRequest = () => new Promise((_, reject) => setTimeout(() => reject(new Error('Request failed!')), 1000));

const RequestDemo = ({ requestFunc }: { requestFunc: () => Promise<any> }) => {
  const { doRequest, data, setData, error, isLoading } = useRequest(requestFunc, {
    onSuccess: (data) => action('Request succeeded')(data),
    onError: (error) => action('Request failed')(error),
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={doRequest} isLoading={isLoading}>Trigger Request</Button>
        <Button onClick={() => setData(null)} disabled={!data}>Reset Data</Button>
      </div>
      <div>
        {data && <pre>✅ Data: {JSON.stringify(data, null, 2)}</pre>}
        {error && <p>❌ Error: {error.message}</p>}
      </div>
    </div>
  );
};

export const SuccessStory: Story = {
  render: () => <RequestDemo requestFunc={mockSuccessRequest} />,
  name: 'Success',
};

export const ErrorStory: Story = {
  render: () => <RequestDemo requestFunc={mockErrorRequest} />,
  name: 'Error',
};

