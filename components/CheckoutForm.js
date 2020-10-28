import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Button,
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import useCartStore from "../utils/hooks/useCartStore";
import { useRouter } from "next/router";

const itemsSelector = (state) => state.items;

const CheckoutForm = ({ total, isDelivery, order, delivery, tax, tip }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const items = useCartStore(itemsSelector);
  const { register, handleSubmit, watch, errors } = useForm();
  const router = useRouter();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total * 100,
        }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  // TODO do something on successful submit
  // change payment succeeded text
  const onSubmit = async (data) => {
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      let emailRes = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          items,
          data,
          prices: {
            order,
            delivery,
            tax,
            tip,
            total,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (emailRes.status === 200) {
        router.push("/");
      }

      // status === 200 -> good
      // status === 500 -> bad
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div className="stripe-checkout">
      <Box
        sx={{
          alignSelf: "center",
          boxShadow:
            "0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)",
          borderRadius: "7px",
          padding: 4,
        }}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isInvalid={errors.name} my="2">
          <FormLabel color="#515F7E" htmlFor="name">
            Your name
          </FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            ref={register({ required: true })}
          />
          <FormErrorMessage>This field is required</FormErrorMessage>
        </FormControl>

        {/* TODO user can only type numbers */}
        <FormControl isInvalid={errors.phone} my="2">
          <FormLabel color="#515F7E" htmlFor="phone">
            Your phone
          </FormLabel>
          <Input
            id="phone"
            name="phone"
            type="text"
            ref={register({ required: true })}
          />
          <FormErrorMessage>This field is required</FormErrorMessage>
        </FormControl>

        {isDelivery ? (
          <FormControl isInvalid={errors.address} my="2">
            <FormLabel color="#515F7E" htmlFor="address">
              Your address
            </FormLabel>
            <Input
              id="address"
              name="address"
              type="text"
              ref={register({ required: true })}
            />
            <FormErrorMessage>This field is required</FormErrorMessage>
          </FormControl>
        ) : null}

        {/* TODO check email format */}
        <FormControl my="6">
          <FormLabel color="#515F7E" htmlFor="email">
            Your email
          </FormLabel>
          <Input id="email" name="email" type="text" ref={register} />
          <FormHelperText>
            Fill only if you want to receive order details on your email
          </FormHelperText>
        </FormControl>

        <FormControl my="2" isInvalid={errors.date}>
          <FormLabel color="#515F7E" htmlFor="date">
            Date
          </FormLabel>
          <Input
            id="date"
            name="date"
            type="date"
            ref={register({ required: true })}
          />
        </FormControl>

        <FormControl my="2" isInvalid={errors.time}>
          <FormLabel color="#515F7E" htmlFor="time">
            Time
          </FormLabel>
          <Input
            id="time"
            name="time"
            type="time"
            ref={register({ required: true })}
          />
        </FormControl>

        <FormControl my="2">
          <FormLabel color="#515F7E" htmlFor="note">
            Additional note
          </FormLabel>
          <Input id="note" name="note" type="text" ref={register} />
        </FormControl>

        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />

        <Button
          disabled={processing || disabled || succeeded}
          id="submit"
          type="submit"
          _hover={{
            filter: "contrast(115%)",
          }}
          _disabled={{
            opacity: 0.5,
            cursor: "default",
          }}
          sx={{
            background: "#5469d4",
            color: "#ffffff",
            borderRadius: "0 0 4px 4px",
            border: 0,
            padding: "12px 16px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            display: "block",
            transition: "all 0.2s ease",
            boxShadow: "0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <Box>
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay $" + total
            )}
          </Box>
        </Button>

        {error && (
          <Text
            sx={{
              color: "rgb(105, 115, 134)",
              fontSize: "16px",
              lineHeight: "20px",
              textAlign: "center",
              pb: "12px",
            }}
          >
            {error}
          </Text>
        )}

        {succeeded ? (
          <Text
            sx={{
              color: "rgb(105, 115, 134)",
              fontSize: "16px",
              lineHeight: "20px",
              textAlign: "center",
              pb: "12px",
            }}
          >
            Payment succeeded, see the result in your
          </Text>
        ) : null}
      </Box>
    </div>
  );
};

export default CheckoutForm;
