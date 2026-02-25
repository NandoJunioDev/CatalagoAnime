package nandojuniodev.catalagoanime.dtos.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import nandojuniodev.catalagoanime.dtos.AnimeDto;
@Schema(hidden = false)
public record SingleAnimeDtoResponse(AnimeDto data) {
}
