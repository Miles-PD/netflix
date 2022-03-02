import React from "react"
import {Accordian} from "../components"
import OptForm from "../components/opt-form"
import faqsData from "../fixtures/faqs.json"

export function FaqsContainer() {
    return (
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>

            {faqsData.map(item => (
                <Accordian.Item key={item.id}>
                    <Accordian.Header>{item.header}</Accordian.Header>
                    <Accordian.Body>{item.body}</Accordian.Body>
                </Accordian.Item>
            ))}

            <OptForm>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Text>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm>
        </Accordian>
    )
}