import React from "react"
import FormFinish from "./FormFinish"
import FormGetStarted from "./FormGetStarted"

function RegisterForm() {
  const [isSubmit, setIsSubmit] = React.useState(false)

  const onSubmit = (data) => {
    setIsSubmit(true)
    console.log(data);
  }

  return (
    <>
      {
        !isSubmit ? (
          <FormGetStarted  onSubmit={onSubmit} />
        ) : (
          <FormFinish />
        )
      }
    </>
  )
}

export default RegisterForm