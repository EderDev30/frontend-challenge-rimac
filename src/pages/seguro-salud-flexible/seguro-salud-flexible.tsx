import "./seguro-salud-flexible.scss";
import ImageSeguro from "../../assets/image-seguro.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import { getUserData } from "../../services/api";
import { useNavigate } from "react-router-dom";
import useUser from "../../hook/useUser";
import { TypeDoc } from "../../types.d";

interface IFormInput {
  tipoDoc: string;
  nroDoc: string;
  celular: string;
  politicaPrivacidad: boolean;
  politicaComercial: boolean;
}

const schema = yup
  .object({
    nroDoc: yup.string().required("Nro de documento requerido"),
    tipoDoc: yup.string().required("Tipo de documento requerido"),
    celular: yup.string().required("Celular requerido"),
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

function SeguroSaludFlexible() {
  const navigate = useNavigate();
  const { updateUser } = useUser();

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

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
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
  };

  return (
    <section className="seguro__salud">
      <div className="seguro__salud__content container">
        <div className="seguro__salud__content__left">
          <img src={ImageSeguro} alt="portada seguro salud" />
        </div>
        <div className="seguro__salud__content__right">
          <div className="seguro__salud__content__right__title">
            <span className="seguro__salud__content__right__promo">
              Seguro Salud Flexible
            </span>
            <div className="seguro__salud__content__right__description">
              <h1>Creado para ti y tu familia</h1>
              <p>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>
          </div>

          <div className="seguro__salud__content__right__title-mobile">
            <div className="seguro__salud__content__right__title-mobile__header">
              <div>
                <span className="seguro__salud__content__right__promo">
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
                  <select {...register("tipoDoc")}>
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                  </select>
                </div>
                <div className="input__documento__nro">
                  <input
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
            <div className="seguro__salud__content__right__legal">
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
      <div className="seguro__salud__blur">
        <img className="seguro__salud__blur__left" />
        <img className="seguro__salud__blur__right" />
      </div>
    </section>
  );
}

export default SeguroSaludFlexible;
