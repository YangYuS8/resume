.PHONY: all clean distclean

all:
	latexmk -xelatex resume.tex

clean:
	latexmk -c

distclean:
	latexmk -C
	rm -f resume.pdf
