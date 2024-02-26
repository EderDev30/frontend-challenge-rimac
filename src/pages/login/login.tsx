import "./login.scss";
import ImageSeguro from "../../assets/image-seguro.webp";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import { getUserData } from "../../services/api";
import { useNavigate } from "react-router-dom";
import useUser from "../../hook/useUser";
import { TypeDoc } from "../../types.d";
import { useEffect } from "react";

interface IFormInput {
  tipoDoc: string;
  nroDoc: string;
  celular: string;
  politicaPrivacidad: boolean;
  politicaComercial: boolean;
}

const schema = yup
  .object({
    tipoDoc: yup.string().required("Tipo de documento requerido"),
    nroDoc: yup
      .string()
      .required("Nro de documento requerido")
      .when(["tipoDoc"], ([tipoDoc], schema) => {
        if (tipoDoc === TypeDoc.RUC) {
          return schema
            .trim()
            .length(11, "Nro de documento debe tener 11 numeros");
        }
        return schema.trim().length(8, "Nro de documento debe tener 8 numeros");
      }),
    celular: yup
      .string()
      .required("Celular requerido")
      .length(9, "Celular debe tener 9 numeros"),
    politicaPrivacidad: yup
      .bool()
      .oneOf([true], "Debe aceptar la Politica de Privacidad")
      .required(),
    politicaComercial: yup
      .bool()
      .oneOf([true], "Debe aceptar la Politica Comunicacion Comercial")
      .required(),
  })
  .required();

function Login() {
  const navigate = useNavigate();
  const { updateUser, resetUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      nroDoc: "",
      tipoDoc: TypeDoc.DNI,
      celular: "",
      politicaPrivacidad: false,
      politicaComercial: false,
    },
  });

  useEffect(() => {
    resetUser();
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const userData = await getUserData();
      updateUser({
        birthDay: userData.birthDay,
        name: userData.name,
        lastName: userData.lastName,
        phone: data.celular,
        nroDoc: data.nroDoc,
        typeDoc: data.tipoDoc,
      });
      navigate("/planes");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="login">
      <div className="login__content container">
        <div className="login__content__left">
          <img src={ImageSeguro} alt="portada seguro salud" width={886} />
        </div>
        <div className="login__content__right">
          <div className="login__content__right__title">
            <span className="login__content__right__promo">
              Seguro Salud Flexible
            </span>
            <div className="login__content__right__description">
              <h1>Creado para ti y tu familia</h1>
              <p>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>
          </div>

          <div className="login__content__right__title-mobile">
            <div className="login__content__right__title-mobile__header">
              <div>
                <span className="login__content__right__promo">
                  Seguro Salud Flexible
                </span>
                <h1>Creado para ti y tu familia</h1>
              </div>
              <img
                src={ImageSeguro}
                alt="portada seguro salud"
                width="136px"
                height="160px"
              />
            </div>
            <hr />
            <p>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="input__documento">
                <div className="input__documento__tipo">
                  <label
                    className="input__documento__tipo__label"
                    htmlFor="select-tipo-doc"
                  >
                    Tipo Documento
                  </label>
                  <select id="select-tipo-doc" {...register("tipoDoc")}>
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                  </select>
                </div>
                <div className="input__documento__nro">
                  <input
                    id="nroDoc"
                    {...register("nroDoc")}
                    type="number"
                    placeholder=""
                    className={errors.nroDoc ? "is-invalid" : ""}
                  />
                  <label htmlFor="nroDoc" className="input__label__float">
                    Nro. de documento
                  </label>
                </div>
              </div>
              <ErrorMessage
                errors={errors}
                name="nroDoc"
                render={({ message }) => (
                  <p className="input__error">{message}</p>
                )}
              />
            </div>
            <div>
              <div className="input__celular">
                <input
                  id="celular"
                  {...register("celular")}
                  type="number"
                  placeholder=""
                  className={errors.celular ? "is-invalid" : ""}
                />
                <label htmlFor="celular" className="input__label__float">
                  Celular
                </label>
              </div>
              <ErrorMessage
                errors={errors}
                name="celular"
                render={({ message }) => (
                  <p className="input__error">{message}</p>
                )}
              />
            </div>
            <div className="login__content__right__legal">
              <label className={errors.politicaPrivacidad ? "is-invalid" : ""}>
                <input type="checkbox" {...register("politicaPrivacidad")} />
                Acepto lo Política de Privacidad
              </label>
              <label className={errors.politicaComercial ? "is-invalid" : ""}>
                <input type="checkbox" {...register("politicaComercial")} />
                Acepto la Política Comunicaciones Comerciales
              </label>
              <a href="#">Aplican Términos y Condiciones.</a>
            </div>
            <button type="submit">Cotiza aquí</button>
          </form>
        </div>
      </div>
      <div className="login__blur">
        <img className="login__blur__left" alt="login blur left" />
        <img className="login__blur__right" alt="login blur right" />
      </div>
    </section>
  );
}

export default Login;
