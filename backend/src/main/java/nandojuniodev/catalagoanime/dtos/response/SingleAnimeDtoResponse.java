package nandojuniodev.catalagoanime.dtos.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import nandojuniodev.catalagoanime.dtos.AnimeDto;

public record SingleAnimeDtoResponse(AnimeDto data) {
}
