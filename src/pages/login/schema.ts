import * as yup from "yup";
import { TypeDoc } from "../../types.d";

export const schema = yup
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
