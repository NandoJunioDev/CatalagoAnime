package nandojuniodev.catalagoanime.dtos.response;

import io.swagger.v3.oas.annotations.media.Schema;
import nandojuniodev.catalagoanime.dtos.AnimeDto;

import java.util.List;
@Schema(hidden = true)
public record ClienteAnimeDtoResponse(List<AnimeDto>data ) {
}
