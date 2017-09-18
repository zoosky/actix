#[macro_use]
extern crate log;

extern crate bytes;
#[macro_use]
extern crate futures;
#[macro_use]
extern crate tokio_io;
extern crate tokio_core;
extern crate boxfnonce;

mod ctx;
mod sink;
mod framed;

pub mod fut;
pub mod prelude;

pub use fut::CtxFuture;
pub use framed::{CtxFramed, CtxFramedRead, CtxFramedWrite};
pub use ctx::{CtxContext, CtxService, CtxServiceStream, CtxBuilder, Message};
pub use sink::{SinkContext, CtxSinkService, CtxSink, CtxSinkResult};
