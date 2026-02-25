package nandojuniodev.catalagoanime.dtos.response;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(hidden = true)
public record ImagesDto(JpgDto jpg ) {
}
