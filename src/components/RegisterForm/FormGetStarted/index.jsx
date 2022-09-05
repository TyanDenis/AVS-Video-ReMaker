import React from "react"
import Checkbox from "../../Checkbox"
import Input from "../../Input"
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, Controller } from 'react-hook-form';
import styles from "./FormGetStarted.module.scss"

function FormGetStarted({ onSubmit }) {
  const { handleSubmit, formState: { errors }, control } = useForm()
  const [isReCaptcha, setIsReCaptcha] = React.useState(false)

  React.useEffect(() => {
    !(Object.keys(errors).length === 0) && setIsReCaptcha(true)
  }, [errors])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Get started for free!
        </h2>
        <div className={styles.text}>
          Please, fill in the form and get a free license key for your PC
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.body}>
          <div className={styles.inputs}>
            <div>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur }
                }) => (
                  <>
                    <Input className={errors.name && "has-error"} onChange={onChange} onBlur={onBlur} name="name">Name</Input>
                    {errors.name && <p className="help-block-error">Please enter your name</p>}
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  }
                }}
                render={({
                  field: { onChange, onBlur }
                }) => (
                  <>
                    <Input className={errors.email && "has-error"} onChange={onChange} onBlur={onBlur} name="email">Email address</Input>
                    {errors.email && <p className="help-block-error">Please enter a valid email address</p>}
                  </>
                )}
              />
            </div>
          </div>
          <div className={styles.captcha}>
            {
              isReCaptcha &&
              <Controller
                name="recaptcha"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange }
                }) => (
                  <>
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      hl="en"
                      onChange={onChange}
                    />
                    {errors.recaptcha && <p className="help-block-error">reCAPTCHA is required</p>}
                  </>
                )}
              />
            }
          </div>
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <>
                <Checkbox onChange={(e) => onChange(e.target.checked)} value={value} name="checkbox">By providing my personal data I agree to be informed about AVS4YOU software deals via email.</Checkbox>
                {errors.checkbox && <p className="help-block-error">Please agree to receive your free license key.</p>}
              </>
            )}
          />
        </div>
        <button className="button">Get Free License</button>
      </form>
    </div>
  )
}

export default FormGetStarted