import FAQCard from "./FAQCard.jsx"

function FAQTopic(props) {
    return (
        <div>
            {props.active === "General" && (
                <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
                    <FAQCard
                        question="Who can participate in SummerBuild 2025?"
                        answer="SummerBuild is open to all NTU students from all faculties."
                    />
                    <FAQCard
                        question="Why are all the workshops in person?"
                        answer={
                            <>
                                Our workshops are designed to be interactive and
                                hands-on. From our experience, in-person
                                sessions create a more focused learning
                                environment where participants can actively
                                participate, ask questions, and network with
                                peers.
                                <br />
                                <br />
                                Unlike virtual sessions, which can be prone to
                                distractions and passive participation,
                                in-person workshops encourage real-time
                                discussions and a more immersive learning
                                experience.
                            </>
                        }
                    />
                    <FAQCard
                        question="What are Check-In sessions?"
                        answer={
                            <>
                                Between the Opening and Closing Ceremony, we
                                will have Check-In sessions with our SummerBuild
                                mentors for teams to meet and network with their
                                mentors. This gives you an opportunity to learn
                                from the mentors and exchange ideas, experiences
                                and best practices.
                                <br />
                                <br />
                                Whether you're looking for inspiration or
                                feedback on your product, these sessions will
                                provide a supportive environment to help you
                                grow.
                                <br />
                                <br />
                                Make the most of this opportunity to expand your
                                network and improve your product!
                                <br />
                                <br />
                            </>
                        }
                    />
                    <FAQCard
                        question="Do I need to know software development?"
                        answer="Nope! SummerBuild is meant for beginners with completely no experience. Come join us and pick up software development skills!"
                    />
                    <FAQCard
                        question="Do I need to attend for the opening and closing ceremonies?"
                        answer={
                            <>
                                Yes, most of your team should attend the
                                ceremonies, as we will be giving out swag during
                                both opening and closing ceremonies.
                                <br />
                                <br />
                                Furthermore, there will be a science-fair style
                                judging during the closing ceremony for us to
                                assign the levels of achievement to the groups,
                                as well as award the special prizes.
                            </>
                        }
                    />
                    <FAQCard
                        question="How many Check-In Sessions are there?"
                        answer="There are 2 physical Check In sessions throughout the programme. One in the week of 1 June, the other in the week of 16 June. These Check In sessions offer a chance for you to get feedback on your product, network with other groups, learn from one another, and earn more swag!"
                    />
                    <FAQCard
                        question="Can I only attend the workshops?"
                        answer="The workshops are designed to support the building phase of the event, so we strongly encourage participants to commit to the full programme rather than just attending the workshops. You’ll get much more out of it by applying what you learnt immediately!"
                    />
                </div>
            )}

            {props.active === "Registration" && (
                <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
                    <FAQCard
                        question="How do I register for the programme?"
                        answer="Every member in the group must register individually and put the same team name in the form (case sensitive). Please appoint a group leader for your group."
                    />
                    <FAQCard
                        question="How many people can I have in my group?"
                        answer="Every group requires a minimum of 2 people and a maximum of 5."
                    />
                    <FAQCard
                        question="Can people from other schools be in my team?"
                        answer="Yes, as long as you are all NTU students."
                    />
                    <FAQCard
                        question="What if I don't have a group?"
                        answer='If you would like to be randomly matched, indicate "-" in the team name during your registration. We will try our best to match you with other participants who have indiciated the same.'
                    />
                </div>
            )}

            {props.active === "Resources" && (
                <div className="m-auto flex w-[325px] flex-col justify-center rounded-xl bg-[#81BFDA] sm:w-[600px] md:w-[750px]">
                    <FAQCard
                        question="Will I be assigned a mentor?"
                        answer="Every group will be assigned a mentor for you to ask for advice about your project."
                    />
                    <FAQCard
                        question="What do I need to prepare for the workshops?"
                        answer="We'll send out a document with the list of things to prepare before the workshops start. Don't worry, it's nothing too complicated!"
                    />
                    <FAQCard
                        question="Who can I contact for enquiries?"
                        answer="Please direct all emails to devhubilab@e.ntu.edu.sg"
                    />
                </div>
            )}
        </div>
    )
}

export default FAQTopic
