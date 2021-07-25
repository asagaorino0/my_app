import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function SimpleCard({ messages }: { messages: any }) {

    return (
        <Card>
            <Card.Content>
                <Title>{messages.message}</Title>
                <Paragraph>{messages.name}</Paragraph>
                {/* <Paragraph>{messages.age}</Paragraph> */}
                <Paragraph>{messages.uid}</Paragraph>
            </Card.Content>
        </Card>
    );

}