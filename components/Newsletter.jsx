import React from 'react'
import { useForm } from 'react-hook-form'
import Icon from '@/components/Icon'

const IntroMessage = () => (
  <div className="prose dark:prose-invert">
    <h6>사회 깊숙한 곳의 문제를 해결하는 기업</h6>
    <h3>
      <em>(주)사나이클럽</em>
    </h3>
    <h6></h6>
  </div>
)

const Badge = () => (
  <div>
    <a
      className="group h-6 text-omega-400 no-underline"
      href="/"
    >
      <span className="text-xs">메인페이지 이동</span>
      <Icon
        src="/icons/convertkit.svg"
        className="ml-2 mb-1 inline h-6 w-24 align-middle group-hover:text-[#FB6970]"
      />
    </a>
  </div>
)

const Newsletter = ({ className }) => {
  const {
    register,
    formState: { errors, isValidating, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    setError,
    clearErrors,
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`/api/subscribe`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json',
          credentials: 'same-origin',
        }),
      })
      if (res.status === 201) {
        return true
      }
      const json = await res.json()
      if (json.error) {
        throw json.error
      }
    } catch (error) {
      setError('service', { type: 'serviceSideError', message: error })
    }
  }

  React.useEffect(() => {
    if (errors.service && isValidating) {
      clearErrors('service')
    }
  }, [isValidating, errors.service, clearErrors])

  return (
    <div className={className}>
      <IntroMessage />
      <Badge />
    </div>
  )
}

export default Newsletter
